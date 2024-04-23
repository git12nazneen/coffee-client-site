import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setcoffees}) => {

    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;


    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          
                // delete id
                
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                      const remaining = coffees.filter(cof => cof._id != coffee._id)
                      setcoffees(remaining)
                }
            })
            }
          });
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className=" w-2/4 h-52 rounded-lg shadow-2xl" />
                    <div className="flex justify-between w-full pr-4">
                        <div>
                            <h1 className="text-2xl font-bold">{name}</h1>
                            <p className="py-2">{quantity}</p>
                            <p className="py-2">{supplier}</p>
                            <p className="py-2">{taste}</p>
                            <p className="py-2">{details}</p>
                        </div>
                        <div className="join join-vertical space-y-3 px-2">
                            <button className="btn join-item bg-sky-200">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                              <button className="btn join-item bg-sky-200">Edit</button>
                            </Link>
                            <button onClick={()=> handleDelete (_id)} className="btn join-item bg-red-300" >Delete</button>
                        </div>
                    </div>
                 
                </div>
                {/* <button className="btn btn-primary">Get Started</button> */}
           </div>
        </div>
    );
};

export default CoffeeCard;