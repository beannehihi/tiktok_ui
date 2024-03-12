import Header from "~/layouts/components/header";

function headerUploadPage({ children }) {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    );
}

export default headerUploadPage;
