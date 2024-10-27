
import { Data } from "../../types"
import PlanCardView from './PlanCardView';
import data from '../../data.json';


const PlanCard = () => {

    const links: Data = data
    return (

        <div className='items-center justify-between md:flex  gap-4 '>
            {
                links.plans?.map(plan => {
                    return <PlanCardView key={plan.id} {...plan} />
                })
            }
        </div>
    )
}

export default PlanCard;

