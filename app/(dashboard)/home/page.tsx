import TopProjectCards from '../../ui/home/components/top_project_card';
import ExclusiveCards from '@/app/ui/home/components/exclusive_cards';
import Form from '@/app/ui/home/components/form';
import Banner from '@/app/ui/home/components/home_banner';
export default function Page() {
  
    return (
        <div>
            <Banner/>
            <TopProjectCards/>
            <ExclusiveCards/>
            <Form/>
        </div>
    );
}
