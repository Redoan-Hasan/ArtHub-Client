import { Link, useLoaderData } from "react-router-dom";


const AllCraftList = () => {
    const crafts = useLoaderData();
    console.log(crafts);
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr className="text-lg font-semibold">
                        <th>Serial</th>
                        <th>Item Name</th>
                        <th>Category Name</th>
                        <th>Stock Status</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        crafts.map((craftData,idx) =>(
                        <tr className="text-base font-normal" key={craftData._id}>
                            <th>{idx + 1}</th>
                            <td>{craftData.itemName}</td>
                            <td>{craftData.subcategory_name}</td>
                            <td>{craftData.stockStatus}</td>
                            <td>$ {craftData.price}</td>
                            <td><Link to={`/viewDetails/${craftData._id}`} className="btn btn-secondary">View Details</Link></td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCraftList;