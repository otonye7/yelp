import { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantList = () => {
    const { restaurants, setRestaurants } = useContext(RestaurantContext)

    useEffect(() => {
        getData()
    }, []);  


    const getData = async () => {
        try {
            let res = await RestaurantFinder.get("/");
            setRestaurants(res.data.data.restaurants)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants.map(({ id, name, location, price_range }) => {
                            return (
                                <tr key={id}>
                                <td>{name}</td>
                                <td>{location}</td>
                                <td>{"$".repeat(price_range)}</td>
                                <td>reviews</td>
                                <td>
                                   <button className="btn btn-warning">Update</button>
                                </td>
                                <td>
                                   <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default RestaurantList;