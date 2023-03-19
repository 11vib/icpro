import {useRef} from 'react';
import { postCourses } from '../../Services/Workshop';
const AddWorkshops = () => {
    const nameRef= useRef();
    const descriptionRef = useRef();
    const imageUrlRef= useRef();
    const category = useRef();
    const author = useRef();
    const submitHandler=(event)=>{
        event.preventDefault();//hey browser! do not collect form data,we will do it
        alert('Form is to be submitted');
        const workshop={
            name:nameRef.current.value,
            description:descriptionRef.current.value,
            imageUrl:imageUrlRef.current.value,
            category:category.current.value,
            author:author.current.value,
        };
        if(workshop.name.trim()===''||workshop.description.trim()===''||workshop.imageUrl.trim()===''||workshop.category.trim()===''||workshop.author.trim()===''){
            alert('Fill out all the inputs');
        }else{
            postCourses(workshop);
        }
        console.log(workshop);
    };
    return ( 
        <div>
            <h1>Add a Resource</h1>
            <hr/>
            <form onSubmit={submitHandler}>
                <div className="row mb-3">
                    <label htmlFor="name" class="col-sm-2 col-form-label">Resource Name</label>
                    <div className="col-sm-10">
                        <input type="text" class="form-control" id="name" ref={nameRef} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" class="col-sm-2 col-form-label">Resource Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" ref={descriptionRef}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="imageUrl" className="col-sm-2 col-form-label">Resource URL</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" ref={imageUrlRef}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="category" className="col-sm-2 col-form-label">Resource Category</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="category" ref={category}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="author" className="col-sm-2 col-form-label">Author/Authors</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="author" ref={author}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
        </div>
     );
}
 
export default AddWorkshops;
