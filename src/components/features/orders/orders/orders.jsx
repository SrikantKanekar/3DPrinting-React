import React, {Component} from 'react';
import {Link} from "react-router-dom";
import order from "../../../../services/orderService";
import "./orders.css"

class Orders extends Component {
    state = {
        orders: []
    }

    async componentDidMount() {
        const {data: orders} = await order.getAll()
        this.setState({orders})
    }

    render() {
        const {orders} = this.state
        const deliveredDate = order.deliveredOn ? new Date(order.deliveredOn).toLocaleDateString() : '-'

        if (orders.length === 0) return <div className="container">No orders</div>

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="info_column clearfix">
                            <div className="info_col_order">
                                Order
                            </div>
                            <div className="info_col_status">
                                Status
                            </div>
                            <div className="info_col_price">
                                Price
                            </div>
                            <div className="info_col_delivered">
                                Delivered
                            </div>
                        </div>
                    </div>
                </div>

                {orders.map(order =>
                    <div key={order.id} className="row">
                        <div className="col">
                            <div className="order_a">

                                <div className="item_order">
                                    <div className="item_image">
                                        <img src="/3d-order-image.jpeg" alt=""/>
                                    </div>
                                    <div className="item_name_container">
                                        <div className="item_name">
                                            <Link to={`/orders/${order.id}`}>{order.id}</Link>
                                        </div>
                                        <div className="item_objects">
                                            {order.objectIds.length} objects
                                        </div>
                                    </div>
                                </div>

                                <div className="item_status">{order.status}</div>

                                <div className="item_price"><i className="fa fa-inr"/>{order.price}</div>

                                <div className="item_delivered">{deliveredDate}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Orders;