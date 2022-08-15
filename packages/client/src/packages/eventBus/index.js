import messageEvent from "./events/messageEvent";
import dataEvents from "./events/dataEvents";

const WithEventBus = (Component) => ({...props}) => {
  window.sdk = {
    message: messageEvent,
    data: dataEvents
  };

  return <Component {...props} />;
};

export default WithEventBus;
