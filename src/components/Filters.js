import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Popover,
  Box,
  Divider,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { LaunchType, Sort } from "../constants";

const POPOVER_ID = "filter-dialog";
const REPLACE_FILTERS = "replace-filters";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case LaunchType.PAST:
    case LaunchType.UPCOMMING:
    case LaunchType.UNSUCCESSFUL:
      return {
        ...state,
        [action.type]: !state[action.type],
      };
    case Sort.ASC:
    case Sort.DES:
      return {
        ...state,
        sort: action.type,
      };
    case REPLACE_FILTERS:
      return action.payload;
    default:
      return state;
  }
};

export default function Filters({ filtersApplied, applyFilters, disabled }) {
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [filters, dispatchFilter] = useReducer(filtersReducer, filtersApplied);

  useEffect(() => {
    dispatchFilter({ type: REPLACE_FILTERS, payload: filtersApplied });
  }, [filtersApplied]);

  const isFilterSync = useMemo(() => {
    const keys = Object.keys(filtersApplied);
    return keys.every((key) => filtersApplied[key] === filters[key]);
  }, [filtersApplied, filters]);

  const togglePopover = useCallback(
    (e) => setPopoverAnchor((prev) => (prev ? null : e.currentTarget)),
    []
  );

  const resetFilters = useCallback(() => {
    dispatchFilter({ type: REPLACE_FILTERS, payload: filtersApplied });
  }, [filtersApplied]);

  const submitFilters = useCallback(() => {
    applyFilters(filters);
    setPopoverAnchor(null);
  }, [applyFilters, filters]);

  return (
    <>
      <Button
        aria-haspopup="true"
        aria-controls={POPOVER_ID}
        variant="outlined"
        onClick={togglePopover}
        disabled={disabled}
        startIcon={<TuneIcon />}
      >
        Filters
      </Button>
      <Popover
        id={POPOVER_ID}
        role="dialog"
        aria-modal="true"
        open={!!popoverAnchor}
        anchorEl={popoverAnchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box p={2}>
          <FormGroup>
            <FormControlLabel
              checked={filters[LaunchType.UPCOMMING]}
              control={<Checkbox />}
              onChange={() => dispatchFilter({ type: LaunchType.UPCOMMING })}
              label="Upcomming launches"
            />
            <FormControlLabel
              checked={filters[LaunchType.PAST]}
              control={<Checkbox />}
              onChange={() => dispatchFilter({ type: LaunchType.PAST })}
              label="Past launches"
            />
            <FormControlLabel
              checked={filters[LaunchType.UNSUCCESSFUL]}
              control={<Checkbox />}
              onChange={() => dispatchFilter({ type: LaunchType.UNSUCCESSFUL })}
              label="Unsuccessful launches"
            />
          </FormGroup>
          <Divider />
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Order
            </FormLabel>
            <FormControlLabel
              value={Sort.ASC}
              control={<Radio />}
              label="Ascending"
              checked={filters.sort === Sort.ASC}
              onChange={(_, checked) =>
                checked && dispatchFilter({ type: Sort.ASC })
              }
            />
            <FormControlLabel
              value={Sort.DES}
              control={<Radio />}
              label="Descending"
              checked={filters.sort === Sort.DES}
              onChange={(_, checked) =>
                checked && dispatchFilter({ type: Sort.DES })
              }
            />
          </FormControl>
          <Divider />
          <Box display="flex" sx={{ py: 1 }} justifyContent="space-around">
            <Button
              variant="outlined"
              color="warning"
              onClick={resetFilters}
              disabled={isFilterSync}
            >
              Reset Filters
            </Button>
            <Button
              variant="outlined"
              onClick={submitFilters}
              disabled={isFilterSync}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
