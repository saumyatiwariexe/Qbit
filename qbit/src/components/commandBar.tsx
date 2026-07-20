import {useState,type KeyboardEvent} from 'react';

const SUGGESTIONS= [
    'take me back to the login bug ticket',
    'back to the dashboard',
    'where I was reading comments',
];

interface CommandBarProps { onRecall: (query:string) => void; disabled: boolean}

export default function CommandBar({onRecall, disabled}:CommandBarProps){
    function submit(text) {
        const q= (text ?? value).trim();
        onRecall(q);
        setValue('');
    }

    return( <div className="command-bar">
        <div className="command-input-wrap">
            <span className="glyph">⌊</span>
            <input
                className="command-input"
                placeholder='Try "take me back to the ticket about the login bug"'
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && submit()}
                disabled={disabled}
            />
        </div>
        <div className="command-hints">
            {SUGGESTIONS.map((s)=> (
                <button key={s} type = "button" className= "command-hint" onClick= {()=> submit (s)} disabled={disabled}>
                    {s}
                </button>
            ))}
        </div>
        <button className="command-submit" onClick={() => submit()} disabled={disabled || !CSSMathValue.trim()}>
            Recall
        </button>
    </div>)
}