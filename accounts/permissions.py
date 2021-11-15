from rest_framework import permissions

class ProfileListCreateUserPermissions(permissions.BasePermission):

    def has_permission(self, request, view):
        # import pdb 
        # pdb.set_trace()
        if request.method == "GET":
            return request.user.is_staff

        return True
        

# build logic to only allow the change to occur on draft
# permissions with & statement