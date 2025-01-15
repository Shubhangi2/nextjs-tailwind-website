import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItem {
    question: string
    answer: string
}

const FaqInfo: React.FC<{ faq: FAQItem }> = ({ faq }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false)
    return (
        <div className="flex justify-between items-center">
            <div className="p-3">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
        </div>
        <ChevronDown size={20} className="m-3" onClick={()=>{}}/>
        </div>
    )
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
},

]
const FAQ = () => {



    return (
        <div className="w-[70%] m-auto">
            <h1 className="p-3 font-bold text-xl border-b-[1px] border-gray-200">Frequently Asked Questions</h1>
            <div className="flex flex-col divide-y ">
                {faqList.map((faq, index) => (
                    <div key={index} >
                        <FaqInfo faq={faq} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;