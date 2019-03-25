import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import{
    Table,
    Button,
    ButtonGroup,
    Badge 
} from 'reactstrap'

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap' 


class TableComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            pageSize : 10
        };
    }

    nextAction = async (element, typeOfAction) => {
        
    }

    handleClick(e, index) {
        e.preventDefault();  //preventDefault ?
        this.setState({
          currentPage: index
        });
    }

    pagination = () => {

        const { currentPage } = this.state;
        console.log(this.props.tableBody.length)
        const pagesCount = Math.ceil(this.props.tableBody.length / this.state.pageSize)

        console.log(currentPage, pagesCount)

        return(
            <Pagination aria-label="Page navigation example">
            
                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage - 1)}
                            previous
                            href="#"
                        />
                    </PaginationItem>

                    {[...Array(pagesCount)].map((page, i) => 
                    <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                    )}

                    <PaginationItem disabled={currentPage >= pagesCount - 1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage + 1)}
                            next
                            href="#"
                        />
                    </PaginationItem>
            
          </Pagination>
        )


    }


    renderTableHeader = () => {
        return(
            <tr>                    
                {this.props.tableHeader.map ( (header, index) => 
                <th key= {index}>{header}</th>
                )}
            </tr> 
        )
    }

    renderTableBody = () => {
        return(
        this.props.tableBody.slice(this.state.currentPage*this.state.pageSize, (this.state.currentPage+1)*this.state.pageSize).map((struct, indexRow)=> 
            <tr  key= {indexRow}>
                {Object.keys(struct).map((elementOfStruct, indexElement) =>
                {

                    return(
                        <td key={indexElement}>
                            {struct[elementOfStruct]} 
                        </td>
                    )
                }
                )}   

                {/* options */}
                <td className="w-25">
                    <ButtonGroup>
                        {console.log(this.props.tableOptions)}
                        {this.props.tableOptions.map((button) => 
                            <Button className="mr-1" color={button.color} onClick={() => this.nextAction(struct, button.nextActionParam)}>{button.leyend}</Button>
                        )}
                    </ButtonGroup>
                </td>
            </tr>
        )
    )
    }

    render() {

        console.log(this.props.tableBody)

        return(

            <Table striped responsive>

                <thead>
                    <tr>                    
                        {this.props.tableHeader.map ( (header, index) => 
                        <th key= {index}>{header}</th>
                        )}
                    </tr> 
                </thead>


                <tbody>
                    {this.renderTableBody()}
                </tbody>


                {this.pagination()}
                
                
                        
            </Table>
        )
    }

}

TableComponent.propTypes = {
    
    tableHeader : PropTypes.array.isRequired,

    tableBody : PropTypes.array.isRequired,

    tableOptions : PropTypes.array.isRequired,
    
};

export default TableComponent;