/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if (x === y || !list.head) {
    return list; // No need to swap if they're the same or if the list is empty
  }

  let x_prev = list.findWithPrevious((node) => node === x)[1];
  let y_prev = list.findWithPrevious((node) => node === y)[1];

  // If x or y are not found in the list, return the list unchanged
  if (!x || !y) {
    return list;
  }

  // Swap the previous node's `next` pointers
  if (x_prev) {
    x_prev.next = y;
  } else {
    list.head = y; // If x is the head
  }

  if (y_prev) {
    y_prev.next = x;
  } else {
    list.head = x; // If y is the head
  }

  // Now, swap the `next` pointers of x and y
  let temp = x.next;
  x.next = y.next;
  y.next = temp;

  return list;
}

module.exports = swap;
