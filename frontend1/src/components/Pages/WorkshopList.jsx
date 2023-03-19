// import { useEffect , useState} from 'react';
// import { getgetCourses } from "../../Services/Workshop";

// const WorkshopList = () => {
//     const [workshops,setWorkshops]= useState([]);
//     const[loading,setLoading]= useState(true);
//     const[error,setError]= useState(null);
//     useEffect(
//         // 1st argument -> function to call
//         () => { 
//             const helper = async () => {
//                 try{const workshops = await getgetCourses();
//                 console.log( workshops ); // shows the array
//                 setWorkshops(workshops);}catch(error){
//                     setError(error);
//                 }finally{
//                 setLoading(false);
//                 }
//             }

//             helper();
//         },
//         // 2nd argument -> empty array means we need the function to be called when the component renders for the first time
//         []
        
//     );

//     return (
//         <div>
//             <h1>Resource List</h1>
//             <hr/>
//             {/* conditional rendering */}
//             {
//                 loading &&(<div class="d-flex justify-content-center">
//                     <div class="spinner-border" role="status">
//                         <span class="visually-hidden">Loading...</span>
//                     </div>
//                 </div>)
//             }
//             {
//                 error&&(
//                     <div class="alert alert-danger" role="alert">
//                         {error.message}
//                     </div>
//                 )
//             }
//             {/* {workshpos.length} */}
//             <div className='row'>
//             {
//                 //generates an array of JSX elements (React elements) using map()
//                 //[<div>....</div>,<div>....</div>,<div>....</div>,<div>....</div>]
//                 workshops.map(w=>(
//             <div className='col-12 col-md-3 col-lg-4 d-flex'>
//             <div className="card p-3 w-100 my-3">
//                 <img src={w.imageUrl}class="card-img-top" alt={w.name} />
//                 <div className="card-body">
//                 <h5 classNmae="card-title">{w.name}</h5>
//                 <div className="card-text" dangerouslySetInnerHTML={{__html:w.description}}></div>
//                 b5
//             </div>
//             </div>
//             </div>
//                  ) )
//             }
//             </div>
//         </div>
//     );
// }
 
// export default WorkshopList;