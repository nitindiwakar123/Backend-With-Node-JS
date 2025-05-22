#!/bin/bash

# ===================================================================
# 📂 Linux File Permissions - Notes
# ===================================================================

# To view file permissions:
# ----------------------------------------------------
# ls -l filename
# Example output:
# -rw-r--r-- 1 user group 123 Apr 9 12:00 filename.txt
#
# Breakdown:
# - File type & permissions (e.g., -rw-r--r--)
# - User: Owner of the file
# - Group: Group associated with the file
#
# Permission characters:
# - r = read
# - w = write
# - x = execute
# - - = no permission
# ----------------------------------------------------

# 🔧 chmod - Change File Permissions
# ----------------------------------------------------
# Symbolic Mode:
# chmod u+x filename      # Add execute for user
# chmod g-w filename      # Remove write from group
# chmod o=r filename      # Set read-only for others
# chmod ugo+rwx filename  # Give all permissions to everyone
#
# Shorthand:
# u = user (owner)
# g = group
# o = others
# a = all (user + group + others)
# ----------------------------------------------------

# Numeric (Octal) Mode:
# chmod 755 filename
#
# Each digit = permissions for user / group / others:
# 7 = rwx (read, write, execute)
# 6 = rw- (read, write)
# 5 = r-x (read, execute)
# 4 = r-- (read only)
# 0 = --- (no permission)
#
# Examples:
# chmod 777 file   # Everyone can read/write/execute
# chmod 644 file   # Owner: read/write, others: read
# chmod 600 file   # Only owner can read/write
# ----------------------------------------------------

# 👑 chown - Change Ownership
# chown user filename
# chown user:group filename  # Change both owner and group

# 👥 chgrp - Change Group
# chgrp groupname filename

# ✅ Common Use Cases:
# chmod 744 script.sh        # Owner: all, others: read-only
# chmod +x script.sh         # Make script executable for everyone

# 🔁 Recursive Change Example:
# chmod -R 755 myfolder/     # Apply to folder and all contents

# 🛑 Deny all access:
# chmod 000 secret.txt       # No one can read, write, or execute

# ⚠️ Tips:
# - Use `chmod` carefully on system files.
# - Avoid using 777 unless absolutely needed.
# - You can use `stat filename` to see more detailed info.

# ===================================================================
# Save this file as linux-permissions.sh for quick reference.
# ===================================================================
