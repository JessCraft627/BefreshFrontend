import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import { Link } from 'react-router-dom';
import box from '../css/assets/box.png';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null, 'numordered'));

function RenderPropsPopover(props) {
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
                <div className="popover-details">
                    {props.cart.length === 0 ? "Your box is empty. Add products to get started!": null}{props.cart.map((name, index) =>  {return <div key={index}>   <span data-id={index} className="the-x animated pulse" onClick={props.handleCountDown}> X </span><span className="popper-item ">{name}</span>
                     </div>})}
                </div>
                { props.ordered === props.picked ?     <Link
                    className="get-checkout"
                    to={{
                      pathname: "/checkout",
                      state: { picked: props.picked, cart:props.cart }
                    }}
                    > Next </Link> : null}
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
