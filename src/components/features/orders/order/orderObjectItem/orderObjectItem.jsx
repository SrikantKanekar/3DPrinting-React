import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Button from "../../../../util/button/button";
import styles from "./orderObjectItem.module.css"
import ReactTooltip from "react-tooltip";
import SlicingDetail from "../../../util/slicingDetail";

class OrderObjectItem extends Component {

    isCompleted = (object, statusId) => {
        return statusId <= this.props.printingStatus.find(it => it.name === object.printingStatus).id
    }

    isNotAllowed = (object, statusId) => {
        return statusId > this.props.printingStatus.find(it => it.name === object.printingStatus).id + 1
    }

    render() {
        const {object, isAdmin, printingStatus} = this.props

        return (
            <Fragment>
                <div className={styles.object} data-tip="" data-for='orderObject'>
                    <div className={styles.image}>
                        <img src={object.imageUrl} alt=""/>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.title}>
                            {!isAdmin && <Link to={`/objects/${object.id}`}>{object.name}</Link>}
                            {isAdmin && <div>{object.name}</div>}
                        </div>

                        <div className={object.printingStatus.toLowerCase()}>
                            {object.printingStatus}
                        </div>

                        <div className={styles.quantity}>x{object.quantity}</div>

                        {isAdmin && (
                            <Fragment>
                                <div>ID : {object.id}</div>
                                <div>
                                    File: <a href={object.fileUrl}>download</a>
                                </div>
                                <div className={styles.buttons}>
                                    {printingStatus.map(status =>
                                        <Button
                                            key={status.id}
                                            label={status.name}
                                            errors={this.isNotAllowed(object, status.id)}
                                            completed={this.isCompleted(object, status.id)}
                                            onClick={() => this.props.updatePrintingStatus(status.name, object)}
                                        />
                                    )}
                                </div>
                            </Fragment>
                        )}
                    </div>
                </div>
                <ReactTooltip id='orderObject' aria-haspopup='true' role='example'>
                    <p>Quality : {object.quality}</p>
                    <SlicingDetail object={object}/>
                    {/*{object.quality === "CUSTOM" && <p>Message: {object.message}</p>}*/}
                </ReactTooltip>
            </Fragment>
        );
    }
}

export default OrderObjectItem;