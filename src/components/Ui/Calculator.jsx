'use client'
import React, { useState, useEffect } from 'react';
import CurrencyFlag from 'react-currency-flags';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { LiaExchangeAltSolid } from 'react-icons/lia';;
import totalFee from '../../../public/img/icons/total-fee.svg';
import Button from './Button';
import dynamic from 'next/dynamic'

const NoSSRSelect = dynamic(() => import('react-select'), { ssr: false })

const Calculator = () => {
  const API_KEY = "cur_live_J7nMmu9sTuSG8QLkh7fY1PEL8UnE8331PtS3qcpx";
  const API_BASE_URL = "https://api.currencyapi.com/v3";
  
  const [sendCurrency, setSendCurrency] = useState({ value: "CAD", label: "CAD" });
  const [receiveCurrency, setReceiveCurrency] = useState({ value: "INR", label: "INR" });
  const [sendAmount, setSendAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("61250");
  const [exchangeRate, setExchangeRate] = useState(61.25);
  const [exchangeRates, setExchangeRates] = useState({});
  const [fee, setFee] = useState("63.11");
  const [lastUpdated, setLastUpdated] = useState("");

  const MARGINS = {
    "CAD-ILS": 0.1398,
    "CAD-INR": 0.096,
    "CAD-JPY": 0.044,
    "CAD-MXN": 0.0535,
    "CAD-NZD": 0.0582,
    "CAD-AED": 0.0768,
    "CAD-CNY": 0.0344,
    "CAD-USD": 0.009,
    "CAD-EUR": 0.025,
    "CAD-CHF": 0.0285,
    "CAD-AUD": 0.0384,
    "CAD-GBP": 0.0246,
    "CAD-HKD": 0.044,
    "ILS-CAD": 0.0793,
    "INR-CAD": 0.22,
    "JPY-CAD": 0.0724,
    "MXN-CAD": 0.0832,
    "NZD-CAD": 0.0408,
    "AED-CAD": 0.0833,
    "CNY-CAD": 0.0888,
    "USD-CAD": 0.017,
    "EUR-CAD": 0.019,
    "CHF-CAD": 0.03,
    "AUD-CAD": 0.0497,
    "GBP-CAD": 0.0284,
    "HKD-CAD": 0.0512,
  };

  const SUPPORTED_CURRENCIES = {
    AUD: { name: "Australian Dollar", flag: "au" },
    CAD: { name: "Canadian Dollar", flag: "ca" },
    CHF: { name: "Swiss Franc", flag: "ch" },
    EUR: { name: "Euro", flag: "eu" },
    GBP: { name: "British Pound", flag: "gb" },
    HKD: { name: "Hong Kong Dollar", flag: "hk" },
    ILS: { name: "Israeli Shekel", flag: "il" },
    INR: { name: "Indian Rupee", flag: "in" },
    JPY: { name: "Japanese Yen", flag: "jp" },
    MXN: { name: "Mexican Peso", flag: "mx" },
    NZD: { name: "New Zealand Dollar", flag: "nz" },
    USD: { name: "US Dollar", flag: "us" },
    AED: { name: "UAE Dirham", flag: "ae" },
    CNY: { name: "Chinese Yuan", flag: "cn" },
  };

  const currencyOptions = Object.keys(SUPPORTED_CURRENCIES).map(code => ({
    value: code,
    label: code,
    name: SUPPORTED_CURRENCIES[code].name,
    flag: SUPPORTED_CURRENCIES[code].flag
  }));

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 12px",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }),
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      minHeight: "auto",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0",
      color: "#AEAEAE",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      zIndex: 20,
    }),
  };

  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const fetchExchangeRates = async () => {
    try {
      const currencies = Object.keys(SUPPORTED_CURRENCIES).join(",");
      const response = await fetch(
        `${API_BASE_URL}/latest?apikey=${API_KEY}&base_currency=CAD&currencies=${currencies}`
      );
      const data = await response.json();
      
      const updatedExchangeRates = {};
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      Object.keys(SUPPORTED_CURRENCIES).forEach((fromCurrency) => {
        Object.keys(SUPPORTED_CURRENCIES).forEach((toCurrency) => {
          if (fromCurrency !== toCurrency) {
            const pairKey = `${fromCurrency}-${toCurrency}`;
            let rate;

            if (fromCurrency === "CAD") {
              rate = data.data[toCurrency]?.value || 1;
            } else if (toCurrency === "CAD") {
              rate = 1 / (data.data[fromCurrency]?.value || 1);
            } else {
              const cadToFrom = 1 / (data.data[fromCurrency]?.value || 1);
              const cadToTo = data.data[toCurrency]?.value || 1;
              rate = cadToTo * cadToFrom;
            }

            if (MARGINS[pairKey]) {
              rate *= 1 + MARGINS[pairKey];
            }

            updatedExchangeRates[pairKey] = rate;
          }
        });
      });

      setExchangeRates(updatedExchangeRates);
      setLastUpdated(currentTime);
      calculateExchange();
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      // Fallback rates
      setExchangeRates({
        "CAD-INR": 61.25,
        "INR-CAD": 0.0163,
      });
    }
  };

  const calculateExchange = () => {
    const sendAmountNum = parseFloat(sendAmount.replace(/,/g, '')) || 0;
    const rateKey = `${sendCurrency.value}-${receiveCurrency.value}`;
    
    if (exchangeRates[rateKey]) {
      const result = sendAmountNum * exchangeRates[rateKey];
      setReceiveAmount(formatCurrency(result));
      setExchangeRate(exchangeRates[rateKey].toFixed(4));
      
      // Calculate fee based on margin
      const margin = MARGINS[rateKey] || 0;
      const feeValue = sendAmountNum * margin;
      setFee(formatCurrency(feeValue));
    }
  };

  const swapCurrencies = () => {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
  };

  const handleSendAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setSendAmount(value);
  };

  const handleCurrencyChange = (selectedOption, isSend) => {
    if (isSend) {
      setSendCurrency(selectedOption);
    } else {
      setReceiveCurrency(selectedOption);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
    const interval = setInterval(fetchExchangeRates, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    calculateExchange();
  }, [sendAmount, sendCurrency, receiveCurrency, exchangeRates]);

  return (
    <div
      className="backdrop-blur-[204px] border-[#FFFFFF] shadow-[0px_14px_34px_0px_#C7C7C733] bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.64)_100%)] rounded-xl lg:rounded-3xl p-3 lg:p-8 w-[92%] lg:w-[90%] mx-auto my-5 sm:my-7 border"
    >
      {/* Send Amount */}
      <div className="relative w-full">
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-[0px_10px_14px_-10px_#9999993D] border border-[#EAEAEA99]">
          <div className="flex flex-col w-[60%]">
            <label className="text-[#6D6C6B80]/50 font-matter-regular text-sm block">
              You send:
            </label>
            <input
              type="text"
              className="text-[22px] lg:text-[32px] font-matter-medium text-[#161616] bg-transparent outline-none w-full"
              value={sendAmount}
              onChange={handleSendAmountChange}
            />
          </div>

          <div className="flex items-center space-x-1 lg:space-x-2  justify-end cursor-pointer">
            <NoSSRSelect
            classNamePrefix="currency-select"
              options={currencyOptions}
              value={sendCurrency}
              onChange={(option) => handleCurrencyChange(option, true)}
              styles={customStyles}
              formatOptionLabel={({ value, label, flag }) => (
                <div className="flex items-center">
                  <CurrencyFlag currency={value} size="md" className="" />
                  <span className="ml-2 text-xl lg:text-2xl font-matter-medium">{label}</span>
                </div>
              )}
              components={{
                IndicatorSeparator: () => null
              }}
              className="w-full"
            />
          </div>
        </div>

        {/* Exchange Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button 
            onClick={swapCurrencies}
            className="bg-white border rounded-full p-4 lg:p-5 focus:outline-none"
          >
            <LiaExchangeAltSolid className="text-xl lg:text-2xl text-[#161616] rotate-90" />
          </button>
        </div>
        
        {/* Receive Amount */}
        <div className="mb-8 mt-4 lg:mt-9">
          <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-[0px_10px_14px_-10px_#9999993D] border border-[#EAEAEA99]">
            <div className="flex flex-col w-[60%]">
              <label className="text-[#6D6C6B80]/50 font-matter-regular text-sm block">
                Recipient Receives:
              </label>
              <span className="text-[22px] lg:text-[32px] font-matter-medium text-[#161616] bg-transparent outline-none">
                {receiveAmount}
              </span>
            </div>

            <div className="flex items-center space-x-1 lg:space-x-2 justify-end ">
              <NoSSRSelect
               classNamePrefix="currency-select"
                options={currencyOptions}
                value={receiveCurrency}
                onChange={(option) => handleCurrencyChange(option, false)}
                styles={customStyles}
                formatOptionLabel={({ value, label, flag }) => (
                  <div className="flex items-center">
                    <CurrencyFlag currency={value} size="md" className="" />
                    <span className="ml-2 text-[22px] lg:text-2xl font-matter-medium">{label}</span>
                  </div>
                )}
                components={{
                  IndicatorSeparator: () => null
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Exchange Rate */}
      <div className="mb-6 lg:mb-6 -mt-4 flex justify-between items-end">
        <div className="w-full">
          <p className="text-base lg:text-lg text-[#03012E80]/50 font-openSans font-normal mb-2">
            Exchange Rate:
          </p>
          <p className="text-lg lg:text-2xl font-medium w-full flex-1 text-[#0006B1] font-aeonik-pro">
            1 {sendCurrency.value} = {exchangeRate} {receiveCurrency.value}
          </p>
        </div>
        <p className="text-xs lg:text-sm text-[#6D6C6B] text-right w-[80%] font-openSans font-normal">
          
(Updated every 2 hours for accuracy.)
        </p>
      </div>
      
      {/* Payment Details */}
      <div className="border border-[#E4E4E4] rounded-2xl p-3.5 lg:p-5">
        <h3 className="text-lg font-aeonik-pro text-dark mb-5">
          Payment & Delivery Details:
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-3 mb-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-[#02001AB2]/70 font-openSans font-normal text-sm lg:text-base">
                Pay with
              </span>
            </div>
            <div className="bg-white rounded-[4px] px-2 py-1 flex gap-2 items-center mt-2">
              <span className="text-xs text-[#02001A80]/50 font-openSans font-normal">
                Interac
              </span>
              <IoIosArrowDown className="text-sm text-[#02001A80]/50" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-[#02001AB2]/70 font-openSans font-normal text-sm lg:text-base">
                Estimated Delivery Time
              </span>
            </div>
            <span className="text-xs text-[#02001A80]/50 font-openSans font-normal">
              1-2 days
            </span>
          </div>
        </div>
      </div>
      
      {/* Total Fees */}
      <div className="bg-white boder border-[#EAEAEA] rounded-2xl p-3 lg:p-4 my-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Image src={totalFee} alt="Fees" width={40} height={40} />
            <div>
              <p className="text-sm text-[#02001A80]/50 font-openSans font-normal">
                Total Fees
              </p>
              <p className="text-sm font-matter-medium text-dark">
                Including in {sendCurrency.value} Amount
              </p>
            </div>
          </div>
          <div className="text-right flex gap-2 items-center">
            <p className="text-xs lg:text-lg font-medium text-gray-900">
              {fee} {sendCurrency.value}
            </p>
            <IoIosArrowForward className="text-xl text-[#AEAEAE]" />
          </div>
        </div>
      </div>
      
      <Button
        lable="Send Money Now"
        className="w-full font-matter-medium py-5"
      />
    </div>
  );
};

export default Calculator;