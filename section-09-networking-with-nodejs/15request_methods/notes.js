// A method is idempotent if making the same request multiple times results in the same effect as making it once.

// GET	                Yes (Doesn’t change server data. Repeating gives same result.)
// HEAD	        Yes (Like GET but without body. No side effects.)
// PUT	                Yes	(Overwrites the same resource — effect stays same.)
// DELETE            Yes	(Deletes the same resource; further deletes have no effect.)
// OPTIONS	Yes	(Just returns info; no changes made.)
// POST	        No	(Creates new resources or triggers different results each time.)
// PATCH	        No	(Partial updates can stack or multiply effects.)