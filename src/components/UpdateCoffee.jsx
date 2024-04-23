import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                swal("Well", "Your updated coffee", "success");
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] p-24 ">
        <h2 className="font-extrabold">UpdateCoffee : {name}</h2>
         <form onSubmit={handleUpdateCoffee}>
         {/* from row */}
          <div className="md:flex">
          <div className="from-control md:w-1/2">
          <label className="label">
                  <span className="label-text">Coffee Name</span>
              </label>
          <div className="join">
              <input type="text" name="name" className="input input-bordered join-item w-full" defaultValue={name} placeholder="Coffee Name"/>
            
              </div>
          </div>
          <div className="from-control md:w-1/2 ml-4">
          <label className="label">
                  <span className="label-text">Available Quantity</span>
              </label>
          <div className="join">
              <input type="text" name="quantity" className="input input-bordered join-item w-full" defaultValue={quantity} placeholder="Available Quantity"/>
            
              </div>
          </div>
          </div>
         {/* from supplier test row */}
          <div className="md:flex">
          <div className="from-control md:w-1/2">
          <label className="label">
                  <span className="label-text">Supplier </span>
              </label>
          <div className="join">
              <input type="text" name="supplier" className="input input-bordered join-item w-full" defaultValue={supplier} placeholder="Supplier Name"/>
            
              </div>
          </div>
          <div className="from-control md:w-1/2 ml-4">
          <label className="label">
                  <span className="label-text">Taste</span>
              </label>
          <div className="join">
              <input type="text" name="taste" className="input input-bordered join-item w-full" defaultValue={taste} placeholder="Taste"/>
            
              </div>
          </div>
          </div>
         {/* from category and details row */}
          <div className="md:flex">
          <div className="from-control md:w-1/2">
          <label className="label">
                  <span className="label-text">Category</span>
              </label>
          <div className="join">
              <input type="text" name="category" className="input input-bordered join-item w-full" defaultValue={category} placeholder="Category"/>
            
              </div>
          </div>
          <div className="from-control md:w-1/2 ml-4">
          <label className="label">
                  <span className="label-text">Details</span>
              </label>
          <div className="join">
              <input type="text" name="details" className="input input-bordered join-item w-full" defaultValue={details} placeholder="Details"/>
            
              </div>
          </div>
          </div>
         {/* from Photo url row */}
          <div className="md:flex">
          <div className="from-control w-full">
              <label className="label">
                  <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" className="input input-bordered join-item w-full" defaultValue={photo} placeholder="Photo URL"/>
          </div>
          </div>
        
          <input type="submit" value="Update coffee"  className="btn btn-block bg-gray-600 text-white my-4"/>
         </form>
      </div>
    );
};

export default UpdateCoffee;