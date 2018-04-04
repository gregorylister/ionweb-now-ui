import React from "react";
import { Collapse, Card, CardHeader, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { style } from "typestyle";

const expanderLeft = style({
    marginTop: "2px !important",
    marginRight: "5px !important",
    float: "left !important"
});

class Expander extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            open: this.props.defaultOpened !== undefined ? this.props.defaultOpened : -1
        };
    }
    // tslint:disable-next-line:variable-name
    openCollapse(number)
    {
        if (this.state.open !== -1)
        {
            this.refs["collapse" + this.state.open].classList.toggle("expanded");
        }
        this.state.open === number ? this.setState({open: -1}) : this.setState({open: number});
        this.refs["collapse" + number].classList.toggle("expanded");
    }
    render()
    {
        return (
            <div className="card-collapse">
                    {
                        this.props.components.map((prop, key) =>
                        {
                            return(
                                <Card className={this.props.plain ? "card-plain" : ""} key={key}>
                                    <CardHeader>
                                        <br />
                                        <div className="innerTableHeader">
                                            <a data-toggle="collapse" aria-expanded={this.state.open === key ? true : false} className={this.state.open === key ? "expanded" : ""} ref={"collapse" + key} onClick={() => this.openCollapse(key)}>
                                                <i className={`${expanderLeft} now-ui-icons ui-1_simple-add`}></i>
                                                {prop.title}
                                            </a>
                                        </div>
                                    </CardHeader>
                                    <Collapse isOpen={this.state.open === key ? true : false}>
                                        <CardBody>
                                            {prop.data}
                                        </CardBody>
                                    </Collapse>
                                </Card>
                            );
                        })
                    }
            </div>
        );
    }
}

Expander.propTypes = {
    defaultOpened: PropTypes.number,
    plain: PropTypes.bool,
    components: PropTypes.arrayOf(PropTypes.object)
};

export default Expander;
