
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface HireFormProps {
  onSuccess?: () => void;
}

export function HireForm({ onSuccess }: HireFormProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    workRole: '',
    timePeriod: '',
    salary: '',
    numberOfWorkers: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfWorkers' ? parseInt(value) || 1 : value
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 1000));
    
  //   toast({
  //     title: t('thankYou'),
  //     description: new Date().toLocaleString(),
  //   });
    
  //   setIsSubmitting(false);
  //   if (onSuccess) onSuccess();
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const response = await fetch('https://formspree.io/f/xrbqbzkk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium mb-1 text-white">
          {t('companyName')}
        </label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="bg-gray-800 border-gray-700 text-white"
        />


      </div>
      
      <div>
        <label htmlFor="workRole" className="block text-sm font-medium mb-1 text-white">
          {t('workRole')}
        </label>
        <Input
          id="workRole"
          name="workRole"
          value={formData.workRole}
          onChange={handleChange}
          required
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      
      <div>
        <label htmlFor="timePeriod" className="block text-sm font-medium mb-1 text-white">
          {t('timePeriod')}
        </label>
        <Input
          id="timePeriod"
          name="timePeriod"
          value={formData.timePeriod}
          onChange={handleChange}
          required
          placeholder="e.g., Jan 2025 - Dec 2025"
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
        />
      </div>
      
      <div>
        <label htmlFor="salary" className="block text-sm font-medium mb-1 text-white">
          {t('salary')}
        </label>
        <Input
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
          placeholder="e.g., 5000€/month"
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
        />
      </div>
      
      <div>
        <label htmlFor="numberOfWorkers" className="block text-sm font-medium mb-1 text-white">
          {t('numberOfWorkers')}
        </label>
        <Input
          id="numberOfWorkers"
          name="numberOfWorkers"
          type="number"
          min="1"
          value={formData.numberOfWorkers}
          onChange={handleChange}
          required
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-yellow hover:bg-yellow-dark text-black transition-colors font-bold"
        disabled={isSubmitting}
      >
        {isSubmitting ? 
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
          : t('sendRequest')
        }
      </Button>
    </form>
  );
}
