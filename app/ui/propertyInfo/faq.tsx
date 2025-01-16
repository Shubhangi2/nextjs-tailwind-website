import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItem {
    question: string
    answer: string
}

const faqList: FAQItem[] = [{
    question: "How can I create a new property listing?",
    answer: "To create a new property listing, you need to follow these steps: 1. Log in to your account. 2. Click on 'Add Listing' in the top right corner. 3. Fill in the required information about your property. 4. Click 'Submit'."
},
{
    question: "What are the different types of property listings?",
    answer: "There are various types of property listings available on PropertyPistol. Some of the most popular types include: 1. Apartments for Sale. 2. Houses for Sale. 3. Vacation Rentals. 4. Commercial Properties."
},
{
    question: "Can I list multiple properties on PropertyPistol?",
    answer: "Yes, you can list multiple properties on PropertyPistol. Simply create a new listing for each property you want to list. You can choose from different property types and configurations."
},

{
    question: "How do I add photos to my property listing?",
    answer: "To add photos to your property listing, follow these steps: 1. Log in to your account. 2. Click on the 'Add Photos' button in the top right corner. 3. Upload your photos using the 'Choose Files' button. 4. Click 'Upload'."
}]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleIndex = (index: number) => {
        if (openIndex === index) setOpenIndex(null)
        else setOpenIndex(index)
    }

    const FaqInfo: React.FC<{ index: number, faq: FAQItem }> = ({ index, faq }) => {
        return (
            <div className="flex justify-between items-start hover:cursor-pointer" onClick={() => toggleIndex(index)} >
                <div className="p-3 flex-1">
                    <h2 className=" text-md">{faq.question}</h2>
                    <div className={`transition-all duration-300 ease-in-out ${
                        openIndex === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}>
                        {openIndex === index ? <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p> : null}
                    </div>
                </div>
                <div    
                    className="p-4 cursor-pointer"
                >
                    <div className={`transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                    }`}>
                        <ChevronDown size={20} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="w-[70%] m-auto bg-white rounded-lg shadow-sm">
            <h1 className="py-6 px-3 font-bold text-xl border-b border-gray-200">
                Frequently Asked Questions
            </h1>
            <div className="flex flex-col divide-y">
                {faqList.map((faq, index) => (
                    <div key={index} className="hover:bg-gray-50">
                        <FaqInfo index={index} faq={faq} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;