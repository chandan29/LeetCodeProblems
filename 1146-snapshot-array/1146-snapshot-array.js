var SnapshotArray = function(length) {
    
        this.snapshots= new Array(length);
        this.curr=[];
        this.nextSnapshotIndex=0;
};

SnapshotArray.prototype.set = function(index, val) {
        this.curr[index]= val;
};

SnapshotArray.prototype.snap = function() {
        // save curr to snapshots with help of nextSnapshotIndex 
            
        this.snapshots[this.nextSnapshotIndex]=[...this.curr];
       
        this.nextSnapshotIndex++;
    
        return this.nextSnapshotIndex-1;
};

SnapshotArray.prototype.get = function(index, snap_id) {
        
       return this.snapshots[snap_id][index]?this.snapshots[snap_id][index]:0;  
};