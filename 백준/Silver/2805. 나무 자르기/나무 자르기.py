import sys
input = sys.stdin.readline
num_tree, len_tree = map(int,input().split())
trees = list(map(int,input().split()))


start = 0
end = max(trees)
while (start <= end):
        mid = (start+end) // 2

        wanted_tree_len = 0
        for i in trees:
            if i >= mid:
                wanted_tree_len += i - mid
        
        if wanted_tree_len >= len_tree:
            start = mid + 1
        else:
            end = mid - 1
print(end)