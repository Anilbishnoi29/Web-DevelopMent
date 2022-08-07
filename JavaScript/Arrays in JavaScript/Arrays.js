const root = document.getElementById("root");
// concat()
root.innerHTML += `<h3>concat():- </h3>`;
root.innerHTML += `<p>The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.</p>`;
const concatArray1 = ['a','b','c'];
const concatArray2 = ['d','e','f'];
const concatArray3 = concatArray1.concat(concatArray2);

root.innerHTML += `<p><i>concatArray1</i> : [${concatArray1}]</p>`;
root.innerHTML += `<p><i>concatArray2</i> : [${concatArray2}]</p>`;
root.innerHTML += `<p><i>concatArray3 = concatArray1.concat(concatArray2);</p>`;
root.innerHTML += `<p><i>concatArray3</i> : [${concatArray3}]</p>`;

