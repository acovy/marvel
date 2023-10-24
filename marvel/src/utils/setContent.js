import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/errorMessage';
import Skeleton from '../components/skeleton/skeleton';

const setContent = (process, Component, data) => {
    switch(process) {
        case "waiting":
            return <Skeleton/>;
            break;
        case "loading":
            return <Spinner/>;
            break;
        case "confirmed":
            return <Component data={data} />;
            break;
        case "error":
            return <ErrorMessage/>;
        default:
            throw new Error("Unexpected process state");
    }
}

export default setContent;