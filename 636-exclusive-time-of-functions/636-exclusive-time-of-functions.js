/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    // result will have time taken for each task (n tasks)
    const result = Array(n).fill(0); // (initialised with 0)
    const stack = [];
    
    for(let idx = 0; idx < logs.length; ++idx) {    // O(L)
        let [id, fn, time] = logs[idx].split(':');
        id = parseInt(id);
        time = parseInt(time);
        
		// if the fn is start, push the id and time to the stack
        if(fn === 'start') {
            stack.push([id, time]);
        } else {
			// if the fn is end, get the prev log from the stack,
			// calculate the duration of fn and add it to the result
            const [prev_log_id, prev_log_time] = stack.pop();
            const duration = time - prev_log_time + 1;
            result[id] += duration;
			
			// if there is a fn that was started earlier and hasn't finished yet (present in the stack)
			// remove the duration from the result of that fn id
			// as that fn was not running during this (`duration`) time
            if(stack.length) {
                const [top_log_id, top_log_time] = stack[stack.length - 1];
                result[top_log_id] -= duration;    
            }
        }
    }
    return result;
};