import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}