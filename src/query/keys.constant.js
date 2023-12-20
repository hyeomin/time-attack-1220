const todoKeys = {
    all: ["todos"],
    lists: () => [...todoKeys.all, "list"],
    list: (filters) => [...todoKeys.lists(), { filters }],
    details: () => [...todoKeys.all, "detail"],
    detail: (id) => [...todoKeys.details(), id],
};

const getTodos = async () => {
    const response = await axios.get(`${SERVER_URI}/todos`);
    return response.data;
};

export const useTodosQuery = (state) => {
    return useQuery(["todos", state], () => getTodos(state));
};
