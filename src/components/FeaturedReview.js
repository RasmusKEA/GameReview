import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export default function featuredReview({review}){
    return(
        <div className='featuredReview'>
            <div className='featured-image'>
                <img src={review.Image} alt="example"/>
            </div>

        <div className='review-snippet'>
            <div className='featured-rating'>
                <CircularProgressbar value={review.Rating} styles={buildStyles({textSize:'40px', textColor: 'black', pathColor: '#eb3c2d'})}strokeWidth={8} maxValue={10} text={`${review.Rating}`}/>
            </div>
            <div className='featured-text'>
                <div className='featured-title'>
                    <p>{review.Title}</p>
                </div>
                <div className='under-title'>
                    <p>{review.UnderTitle}</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}