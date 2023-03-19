import React from 'react';
import Card from "../UI/Card";
import Stack from "../UI/Stack";
import Badge from "../UI/Badge";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../store/filters/filter-selectors";
import {clearFilter, removeFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {
    const currentFilters=useSelector(selectFilters);
    const dispatch=useDispatch()

    if(currentFilters.length===0){
        return null;
    }

    return (
      <Card className={'filter-panel'}>
            <div className={'filter-panel-wrapper'}>
                <Stack>
                    {currentFilters.map(filter=>(
                      <Badge key={filter}
                             onClear={()=>dispatch(removeFilter(filter))}
                      variant={'clearable'}>
                          {filter}
                      </Badge>
                    ))}


                </Stack>
                <button className={'link'}
                onClick={()=>dispatch(clearFilter)}>Clear</button>
            </div>
      </Card>
    );
};

export default FilterPanel;
