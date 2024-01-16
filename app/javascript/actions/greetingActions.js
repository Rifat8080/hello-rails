export const fetchRandomGreeting = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('/api/greetings/random');
        const data = await response.json();
        dispatch({ type: 'SET_GREETING', payload: data.greeting });
      } catch (error) {
        console.error('Error fetching random greeting:', error);
      }
    };
  };
  