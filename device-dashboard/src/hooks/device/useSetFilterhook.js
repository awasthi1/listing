import { useState } from "react";
function useSetFilterHook(value) {
    const [filter, setFilter] = useState(value ?? "All");

    const handleSetFilter = (value) => {
        setFilter(value);
    };

    return [filter, handleSetFilter];
}
export default useSetFilterHook;