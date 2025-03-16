import {Table} from "reactstrap";
import services from "../constants/services.ts";

const Services = () => {
    return (
        <div className={"tw-p-6"}>
            <h2 className={"tw-font-bold tw-font-poppins tw-text-lg"}> Services </h2>
            <div>
                <p>
                    At Obsidian Cleaning Service, we offer a multitude of cleaning and janitorial
                    services to meet your diverse business needs. From standard janitorial garbage collection
                    and mopping, to large industrial shipping and receiving docks, we will meet your cleaning needs!
                </p>
            </div>
            <Table>
                <thead className={"tw-font-poppins tw-text-sm"}>
                    <tr>
                        <th>Service Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
            <tbody className={""}>
            {services.map((row) => (
                <tr key={row.id}>
                    <td>{row.serviceName}</td>
                    <td>{row.description}</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
    );
};

export default Services;