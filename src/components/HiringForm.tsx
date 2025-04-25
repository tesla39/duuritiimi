import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
interface HiringFormProps {
  type: 'cleaner' | 'assistant' | 'other';
  onSuccess?: () => void;
}
export function HiringForm({
  type,
  onSuccess
}: HiringFormProps) {
  const {
    t
  } = useTranslation();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    hireFor: '',
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    serviceDetails: '',
    serviceDuration: '1 hour',
    fromDate: null as Date | null,
    toDate: null as Date | null,
    fromTime: '09:00',
    toTime: '17:00',
    additionalInfo: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectFromDate = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        fromDate: date
      }));
    }
  };
  const handleSelectToDate = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        toDate: date
      }));
    }
  };
  const handleTimeChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);
  
    // const response = await fetch('https://formspree.io/f/xrbqbzkk', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    const response = await fetch('https://formspree.io/f/xrbqbzkk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    setIsSubmitting(false);
    
    if (response.ok) {
      toast({
        title: t('thankYou'),
        description: new Date().toLocaleString()
      });
      if (onSuccess) onSuccess();
    } else {
      toast({
        title: 'Submission failed',
        description: data?.message || 'Something went wrong.'
      });
    }
    
  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   toast({
  //     title: t('thankYou'),
  //     description: new Date().toLocaleString()
  //   });
  //   setIsSubmitting(false);
  //   if (onSuccess) onSuccess();
  // };
  const formatDateTime = (date: Date | null, time: string): string => {
    if (!date) return '';
    return `${format(date, 'MM/dd/yyyy')}, ${time}`;
  };
  return <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'other' && <div>
          <label htmlFor="hireFor" className="block text-sm font-medium mb-1 text-white">
            {t('hireFor')}
          </label>
          <Input id="hireFor" name="hireFor" value={formData.hireFor} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white" />
        </div>}
      
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-white">
          {t('fullName')}
        </label>
        <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white" />
      </div>
      
      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1 text-white">
          {t('address')}
        </label>
        <Input id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="City/Street/Pincode" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
      </div>
      
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1 text-white">
          {t('phoneNumber')}
        </label>
        <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white" />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
          {t('email')}
        </label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white" />
      </div>
      
      <div>
        <label htmlFor="serviceDetails" className="block text-sm font-medium mb-1 text-white">
          {t('serviceDetails')}
        </label>
        <Textarea id="serviceDetails" name="serviceDetails" value={formData.serviceDetails} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white min-h-[80px]" />
      </div>
      
      <div>
        <label htmlFor="serviceDuration" className="block text-sm font-medium mb-1 text-white">
          {t('serviceDuration')}
        </label>
        <Input id="serviceDuration" name="serviceDuration" value={formData.serviceDuration} onChange={handleChange} required placeholder="1 hour" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          {t('fromDate')}
        </label>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full bg-gray-800 border-gray-700 text-white justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.fromDate ? format(formData.fromDate, 'MM/dd/yyyy') : 'MM/DD/YYYY'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
              <Calendar mode="single" selected={formData.fromDate || undefined} onSelect={handleSelectFromDate} initialFocus className="p-3 pointer-events-auto bg-gray-100" />
            </PopoverContent>
          </Popover>
          
          <Select value={formData.fromTime} onValueChange={value => handleTimeChange('fromTime', value)}>
            <SelectTrigger className="w-[110px] bg-gray-800 border-gray-700 text-white">
              <Clock className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              {Array.from({
              length: 24
            }).map((_, i) => <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {`${i.toString().padStart(2, '0')}:00`}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          {t('toDate')}
        </label>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full bg-gray-800 border-gray-700 text-white justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.toDate ? format(formData.toDate, 'MM/dd/yyyy') : 'MM/DD/YYYY'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
              <Calendar mode="single" selected={formData.toDate || undefined} onSelect={handleSelectToDate} initialFocus className="p-3 pointer-events-auto bg-gray-200" />
            </PopoverContent>
          </Popover>
          
          <Select value={formData.toTime} onValueChange={value => handleTimeChange('toTime', value)}>
            <SelectTrigger className="w-[110px] bg-gray-800 border-gray-700 text-white">
              <Clock className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              {Array.from({
              length: 24
            }).map((_, i) => <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {`${i.toString().padStart(2, '0')}:00`}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1 text-white">
          {t('additionalInfo')}
        </label>
        <Textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="bg-gray-800 border-gray-700 text-white min-h-[80px]" />
      </div>
      
      <Button type="submit" className="w-full bg-yellow hover:bg-yellow-dark text-black transition-colors font-bold" disabled={isSubmitting}>
        {isSubmitting ? <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span> : t('sendRequest')}
      </Button>
    </form>;
}