# The World — Friday 13 November 2026

Entry for make.fun competition **news-image-01**: sum up the world's news of
Friday 13 November 2026 in one image.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page with six panels,
researched from real reporting on the day (AP via Level Headlines, Reuters
via The Raisina Post, Profile News):

1. **Ukraine** — Kyiv fires ~1,200 drones at Russia in one of the war's
   biggest air attacks, as US-led peace talks widen to European security.
2. **Iran** — The US military downs two Iranian drones headed for Bahrain;
   the IAEA says ~440 kg of 60%-enriched uranium is unaccounted for.
3. **America** — The FAA lifts a nationwide ground stop after a telecom
   failure halted departures for 4+ hours; 11,000+ flights delayed or
   cancelled.
4. **Tech** — Microsoft 365's global outage enters its second day; Outlook,
   Teams and Copilot down in 74 countries.
5. **Taiwan** — China stages a large unannounced Pacific naval exercise
   around Taiwan.
6. **Diplomacy** — Qatar and Turkey sign a mutual defence pact; COP31
   climate-finance pledges fall ~70%.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` byte for byte. No network, no randomness — two runs
write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
