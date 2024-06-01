import { ArrowClockwise } from "@phosphor-icons/react/dist/ssr";
import PropTypes from "prop-types";

function RefreshButton({ handleRefresh }) { // Add handleRefresh prop
  return (
    <div className="flex justify-start p-2">
      <ArrowClockwise size={24} className="text-white flex justify-end cursor-pointer" onClick={handleRefresh} /> {/* Add onClick handler */}
    </div>
  );
}

RefreshButton.propTypes = {
  handleRefresh: PropTypes.func.isRequired,
};

export default RefreshButton;
