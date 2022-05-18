num_person = int(input())
target_a, target_b = map(int,input().split())
num_connect = int(input())

graph = {}
result = []
for i in range(num_connect):
    connect_1, connect_2 = map(int,input().split())
    if connect_1 in graph:
        graph[connect_1].append(connect_2)
    else:
        graph[connect_1] = [connect_2]
    if connect_2 in graph:
        graph[connect_2].append(connect_1)
    else:
        graph[connect_2] = [connect_1]


def dfs(num, target, graph, discovered = []):
    num+=1
    if target == target_b:
        result.append(num)
    discovered.append(target)
    for w in graph[target]:
        if not w in discovered:
            discovered=dfs(num, w,graph,discovered)
    return discovered
#print(graph)
#print(dfs(0,target_a,graph,[]))
if not target_b in dfs(0,target_a,graph,[]):
    print(-1)

else:
    dfs(0,target_a,graph,[])
    #print(dfs(0,target_a,graph,[]).index(target_b))
    print(result[0]-1)