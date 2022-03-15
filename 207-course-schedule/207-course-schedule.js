var canFinish = function(numCourses, prereq) {
    map = {};
    prereq.map(e => map[e[1]] ? map[e[1]].push(e[0]) : map[e[1]] = [e[0]]);
    
    visited = new Set();
    visiting = new Set();
    for (let course = 0; course < numCourses; ++course) {
        if (hasCycle(course)) return false;
    }
    return true;
    
    
    function hasCycle(course) {
        if (visited.has(course)) return false;
        if (visiting.has(course)) return true;
        visiting.add(course);
        
        if (map[course]) {
            for (let nextCourse of map[course]) {
                if (hasCycle(nextCourse)) return true;
            }
        }
        visiting.delete(course);
        visited.add(course);
    }
};