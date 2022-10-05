import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export default function ReviewMiniature({review}){
    return(
        <div className="review">
            <div className='title-date-comments'>
              <p>{review.Title}</p>
              <div className='date-comments'>
                <p>{review.Date}</p>
                 <p>{review.Comments}</p>
              </div>
            </div>

            <div className="rating-image">
                <div className="vl"></div>
                <div className='rating'>
                    <CircularProgressbar value={review.Rating} styles={buildStyles({textSize:'40px', textColor: 'black', pathColor: '#eb3c2d'})}strokeWidth={8} maxValue={10} text={`${review.Rating}`}/>
                </div>

                <div className='image'>
                    <img src={"https://picsum.photos/150/100"} alt="example"/>
                </div>
                </div>
        </div>
    )
}