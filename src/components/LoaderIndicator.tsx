import { Dna } from "react-loader-spinner";

const LoaderIndicator:React.FC<{visible: boolean}> = ({visible})=>(
    <div style={{"textAlign":"center"}}>
        <Dna
            visible={visible}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{"margin":"0 auto"}}
            wrapperClass="dna-wrapper"
        />
    </div>
);

export default LoaderIndicator;