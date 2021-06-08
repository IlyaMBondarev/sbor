export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export const setTimer = time => `
    <span> Оставшееся время: 
        ${time.hours >= 0 ? 'Часов: ' + time.hours : ''} 
        ${time.minutes >= 0 ? 'Минут: ' + time.minutes : ''} 
        ${time.seconds >= 0 ? 'Секунд: ' + time.seconds : ''}
    </span>
`;