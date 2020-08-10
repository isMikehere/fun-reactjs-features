import React from 'react'
const LazyBus: React.FC<{}> = (props) => {
    console.log('before loaded')
    return <div>This text is loaded dynamically</div>
}
export {LazyBus as default}