import React, {FC} from 'react';

interface INote {
    id: string;
    children:any
}

const Note: FC<INote> = ({id, children}) => {
    return (
        <div className={'Note'} id={id}>
            <span>📌</span>
            <div className={'Content'}>
                {children}
            </div>
        </div>
    );
};

export default Note;