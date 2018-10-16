import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import { Link } from 'react-router-dom';
import box from '../css/assets/box.png';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null, 'numordered'));



function RenderPropsPopover(props) {
    console.log(props)


  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        return (
          <React.Fragment>
             <img src={box}
               alt= "boxes"
              className="boxes-logo"
              aria-owns={open ? 'render-props-popover' : null}
              aria-haspopup="true"
              variant="contained"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            />
            <Popover
              id="render-props-popover"
              open={open}
              anchorEl={anchorEl}
              onClose={() => {
                updateAnchorEl(null);
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div className="popper-container">
                <p className="popover-details">  image pic image name - quantity + </p>
                  <Link
                  className="get-checkout"
                  to={{
                    pathname: "/checkout"
                  }}
                  > Next </Link>
              </div>
            </Popover>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

RenderPropsPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default RenderPropsPopover;
