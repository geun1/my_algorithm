while True:
    n, *heights = map(int, input().split())
    if n == 0:
        break

    stack = []
    max_area = 0
    for i, h in enumerate(heights):
        left = i
        while stack and stack[-1][1] > h:
            bar = stack.pop()
            left = bar[0]
            area = bar[1] * (i - left)
            max_area = max(max_area, area)
        stack.append((left, h))

    while stack:
        bar = stack.pop()
        area = bar[1] * (n - bar[0])
        max_area = max(max_area, area)

    print(max_area)
