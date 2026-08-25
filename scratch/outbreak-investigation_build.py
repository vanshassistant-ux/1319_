import re, os, glob, subprocess, sys

# find the sandbox script from the last run
cands = sorted(glob.glob("/tmp/hermes_sandbox_*/script.py"), key=os.path.getmtime)
print("candidates:", cands[-3:])

src_path = None
for p in reversed(cands):
    try:
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'outbreak-investigation' in content and 'TOPIC = ' in content:
            src_path = p
            break
    except Exception:
        pass
print("using:", src_path)

with open(src_path, 'r', encoding='utf-8') as f:
    script = f.read()

# fix JS-style booleans -> Python (word-boundary only; no such words in string content)
fixed = re.sub(r'\btrue\b', 'True', script)
fixed = re.sub(r'\bfalse\b', 'False', fixed)
print("True->True count:", len(re.findall(r'\bTrue\b', fixed)) - len(re.findall(r'\bTrue\b', script)))

out = "/home/booboo/work/MASTER_1319/scratch/outbreak-investigation_build.py"
with open(out, 'w', encoding='utf-8') as f:
    f.write(fixed)

r = subprocess.run([sys.executable, out], capture_output=True, text=True, cwd="/home/booboo/work/MASTER_1319", timeout=120)
print("EXIT:", r.returncode)
print(r.stdout[-4000:])
if r.stderr:
    print("STDERR:", r.stderr[-3000:])
