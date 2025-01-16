import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  allowOtherSellers: boolean;
  getWhatsAppUpdates: boolean;
}

const EnquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    allowOtherSellers: false,
    getWhatsAppUpdates: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-sm">
      <div className="text-xl font-semibold mb-6">Interested? Enquire Now</div>
      
      {/* Developer Info */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg mb-6">
       
        <div>
          <div className="font-medium">10 AK Natura - OAK Group</div>
          <div className="text-sm text-gray-600">Developer</div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="allowOtherSellers"
              checked={formData.allowOtherSellers}
              onChange={handleInputChange}
              className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
            />
            <span className="text-sm text-gray-600">Allow other sellers to Contact</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="getWhatsAppUpdates"
              checked={formData.getWhatsAppUpdates}
              onChange={handleInputChange}
              className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
            />
            <span className="text-sm text-gray-600">Get WhatsApp Updates</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Get Contact Details
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          I authorize PROPERTY PISTOL REALTY PRIVATE LIMITED and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
        </p>
      </form>
    </div>
  );
};

export default EnquiryForm;