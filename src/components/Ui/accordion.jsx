"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex gap-2">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left",
        className
      )}
      {...props}
    >
      {children}
      <div className="relative h-4 w-4 ml-3 lg:ml-0">
        <Plus
          className={cn(
            "absolute text-[#183B56] inset-0 h-5 w-5  transition-all duration-200",
            "opacity-100 scale-100",
            "group-data-[state=open]:opacity-0 group-data-[state=open]:scale-0"
          )}
        />
        <Minus
          className={cn(
            "absolute inset-0 h-5 w-5 text-[#005AED]  transition-all duration-200",
            "opacity-0 scale-0",
            "group-data-[state=open]:opacity-100 group-data-[state=open]:scale-100"
          )}
        />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };