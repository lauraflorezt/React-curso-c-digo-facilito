import data from '../data/events.json'

const useEventsData = () => {
    const {
        _embedded: { events },
      } = data;

      return {
        events
      };
};

export default useEventsData