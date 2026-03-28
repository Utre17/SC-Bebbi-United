lucide.createIcons();
        document.getElementById('year').textContent = new Date().getFullYear();

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function initContactForm() {
            const form = document.getElementById('contact-form');
            if (!form) return;

            const statusEl = document.getElementById('contact-status');
            const submitBtn = document.getElementById('contact-submit');

            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                if (!statusEl || !submitBtn) return;

                statusEl.classList.add('hidden');
                statusEl.textContent = '';

                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

                try {
                    const formData = new FormData(form);
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Accept: 'application/json'
                        }
                    });

                    if (response.ok) {
                        form.reset();
                        statusEl.textContent = 'Danke! Deine Nachricht wurde erfolgreich gesendet.';
                        statusEl.className =
                            'rounded-lg border border-bebbi-neon/40 bg-bebbi-neon/10 text-bebbi-neon px-4 py-3 text-sm';
                    } else {
                        statusEl.textContent =
                            'Leider hat das Senden nicht geklappt. Bitte versuche es später erneut.';
                        statusEl.className =
                            'rounded-lg border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm';
                    }
                } catch (error) {
                    statusEl.textContent =
                        'Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.';
                    statusEl.className =
                        'rounded-lg border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm';
                } finally {
                    statusEl.classList.remove('hidden');
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                }
            });
        }

        // --- MATCHCENTER DATA & RENDERING ---
        const clubName = 'SC Bebbi United';
        const clubLogoSrc = 'assets/images/logo.png';

        const teamLogos = {
            'FC Reinach': 'assets/images/teams/fc-reinach.png',
            'FC Frenkendorf': 'assets/images/teams/fc-frenkendorf.png',
            'FC Frenkendorf blau': 'assets/images/teams/fc-frenkendorf.png',
            'FC Gelterkinden': 'assets/images/teams/fc-gelterkinden.png',
            'FC Liestal': 'assets/images/teams/fc-liestal.png',
            'FC Concordia Basel a': 'assets/images/teams/fc-concordia-basel.png',
            'FC Concordia Basel b': 'assets/images/teams/fc-concordia-basel.png',
            'FC Therwil FF-17': 'assets/images/teams/fc-therwil-ff-17.png',
            'FC Therwil FF-14/9': 'assets/images/teams/fc-therwil-ff-17.png',
            'FC Arlesheim': 'assets/images/teams/fc-arlesheim.png',
            'FC Telegraph BS': 'assets/images/teams/fc-telegraph-bs.png',
            'FC Telegraph BS weiss': 'assets/images/teams/fc-telegraph-bs.png',
            'FC Nordstern BS': 'assets/images/teams/fc-nordstern-bs.png',
            'FC Nordstern BS schwarz': 'assets/images/teams/fc-nordstern-bs.png',
            'FC Breitenbach': 'assets/images/teams/fc-breitenbach.png',
            'FC Breitenbach rot': 'assets/images/teams/fc-breitenbach.png',
            'FC Biel-Benken D1': 'assets/images/teams/fc-biel-benken.png',
            'FC Black Stars D2': 'assets/images/teams/fc-black-stars.png',
            'FC Ettingen': 'assets/images/teams/fc-ettingen.png',
            'FC Laufen D14 schwarz': 'assets/images/teams/fc-laufen.png',
            'FC Oberwil rot': 'assets/images/teams/fc-oberwil.png',
            'SV Muttenz': 'assets/images/teams/sv-muttenz.png',
            'US Olympia 1963': 'assets/images/teams/us-olympia-1963.png',
            'BSC Old Boys a': 'assets/images/teams/bsc-old-boys.png',
            'BSC Old Boys b': 'assets/images/teams/bsc-old-boys.png',
            'SC Steinen Basel': 'assets/images/teams/sc-steinen-basel.png',
            'SC Binningen D9 c': 'assets/images/teams/sc-binningen.png'
        };

        const matchesFF17 = [
            {
                dateIso: '2026-03-14',
                time: '11:00',
                homeTeam: clubName,
                awayTeam: 'FC Reinach',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255358&v=0',
                homeScore: 2,
                awayScore: 2,
                status: 'Endstand'
            },
            {
                dateIso: '2026-03-21',
                time: '17:00',
                homeTeam: 'FC Frenkendorf',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255361&v=0',
                homeScore: 1,
                awayScore: 1,
                status: 'Endstand'
            },
            {
                dateIso: '2026-03-28',
                time: '17:00',
                homeTeam: clubName,
                awayTeam: 'FC Gelterkinden',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255367&v=0',
                homeScore: 5,
                awayScore: 3,
                status: 'Endstand'
            },
            {
                dateIso: '2026-04-11',
                time: '15:00',
                homeTeam: 'FC Liestal',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255372&v=0'
            },
            {
                dateIso: '2026-04-18',
                time: '15:00',
                homeTeam: clubName,
                awayTeam: 'FC Concordia Basel b',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255376&v=0'
            },
            {
                dateIso: '2026-04-25',
                time: '12:30',
                homeTeam: 'FC Therwil FF-17',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255383&v=0'
            },
            {
                dateIso: '2026-05-02',
                time: '11:00',
                homeTeam: clubName,
                awayTeam: 'FC Arlesheim',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255385&v=0'
            },
            {
                dateIso: '2026-05-09',
                time: '17:00',
                homeTeam: 'FC Telegraph BS',
                awayTeam: clubName,
                location: '-'
            },
            {
                dateIso: '2026-05-30',
                time: '13:00',
                homeTeam: clubName,
                awayTeam: 'BSC Old Boys b',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255404&v=0'
            },
            {
                dateIso: '2026-06-07',
                time: '13:00',
                homeTeam: 'SC Steinen Basel',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4255405&v=0'
            }
        ];

        const matchesFF14 = [
            {
                dateIso: '2026-03-28',
                time: '16:00',
                homeTeam: 'FC Therwil FF-14/9',
                awayTeam: clubName,
                location: '-',
                homeScore: 6,
                awayScore: 1,
                status: 'Endstand'
            },
            {
                dateIso: '2026-04-11',
                time: '11:00',
                homeTeam: clubName,
                awayTeam: 'FC Nordstern BS',
                location: '-'
            },
            {
                dateIso: '2026-04-18',
                time: '10:00',
                homeTeam: 'FC Arlesheim',
                awayTeam: clubName,
                location: '-'
            },
            {
                dateIso: '2026-04-25',
                time: '13:00',
                homeTeam: clubName,
                awayTeam: 'FC Frenkendorf blau',
                location: '-'
            },
            {
                dateIso: '2026-05-02',
                time: '11:00',
                homeTeam: 'FC Concordia Basel a',
                awayTeam: clubName,
                location: '-'
            },
            {
                dateIso: '2026-05-10',
                time: '13:00',
                homeTeam: clubName,
                awayTeam: 'FC Breitenbach',
                location: '-'
            },
            {
                dateIso: '2026-05-16',
                time: '10:00',
                homeTeam: 'SV Muttenz',
                awayTeam: clubName,
                location: '-'
            },
            {
                dateIso: '2026-05-31',
                time: '11:30',
                homeTeam: 'FC Allschwil',
                awayTeam: clubName,
                location: '-'
            },
            {
                dateIso: '2026-06-07',
                time: '13:00',
                homeTeam: clubName,
                awayTeam: 'BSC Old Boys a',
                location: '-'
            }
        ];

        const matchesD9 = [
            {
                dateIso: '2026-03-25',
                time: '18:30',
                homeTeam: 'FC Biel-Benken D1',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256378&v=0',
                homeScore: 7,
                awayScore: 7,
                status: 'Endstand'
            },
            {
                dateIso: '2026-04-12',
                time: '11:30',
                homeTeam: 'FC Breitenbach rot',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256391&v=0'
            },
            {
                dateIso: '2026-04-18',
                time: '11:00',
                homeTeam: clubName,
                awayTeam: 'FC Ettingen',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256399&v=0'
            },
            {
                dateIso: '2026-04-25',
                time: '11:45',
                homeTeam: 'FC Laufen D14 schwarz',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256404&v=0'
            },
            {
                dateIso: '2026-05-02',
                time: '11:00',
                homeTeam: clubName,
                awayTeam: 'FC Nordstern BS schwarz',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256414&v=0'
            },
            {
                dateIso: '2026-05-09',
                time: '10:00',
                homeTeam: 'FC Oberwil rot',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256417&v=0'
            },
            {
                dateIso: '2026-05-16',
                time: '11:00',
                homeTeam: clubName,
                awayTeam: 'FC Telegraph BS weiss',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256429&v=0'
            },
            {
                dateIso: '2026-05-30',
                time: '13:00',
                homeTeam: clubName,
                awayTeam: 'US Olympia 1963',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256430&v=0'
            },
            {
                dateIso: '2026-06-06',
                time: '09:30',
                homeTeam: 'SC Binningen D9 c',
                awayTeam: clubName,
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256443&v=0'
            },
            {
                dateIso: '2026-06-13',
                time: '13:00',
                homeTeam: clubName,
                awayTeam: 'FC Black Stars D2',
                location: '-',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?ln=&lng=1&oid=8&tg=4256384&v=0'
            }
        ];

        const lastResult = null;

        const initialVisibleMatches = 6;
        let isFF17Expanded = false;
        let isFF14Expanded = false;
        let isD9Expanded = false;

        function getDateFromMatch(match) {
            if (match.dateIso) {
                return new Date(`${match.dateIso}T00:00:00`);
            }
            return null;
        }

        function formatMatchDateLabel(match) {
            if (match.dateLabel) return match.dateLabel;
            const date = getDateFromMatch(match);
            if (!date || Number.isNaN(date.getTime())) return '';

            const weekday = new Intl.DateTimeFormat('de-CH', { weekday: 'short' })
                .format(date)
                .replace('.', '');
            const day = new Intl.DateTimeFormat('de-CH', { day: '2-digit' }).format(date);
            const month = new Intl.DateTimeFormat('de-CH', { month: '2-digit' }).format(date);
            return `${weekday}, ${day}.${month}.`;
        }

        function formatMatchDateShort(match) {
            if (match.dateShort) return match.dateShort;
            const date = getDateFromMatch(match);
            if (!date || Number.isNaN(date.getTime())) return '';

            const day = new Intl.DateTimeFormat('de-CH', { day: 'numeric' }).format(date);
            const monthShort = new Intl.DateTimeFormat('de-CH', { month: 'short' })
                .format(date)
                .replace('.', '');
            return `${day}. ${monthShort}`;
        }

        function getAbbreviation(teamName) {
            return teamName
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 3)
                .map((word) => word[0])
                .join('')
                .toUpperCase();
        }

        function setTeamVisual(side, teamName) {
            const imgEl = document.getElementById(`matchday-${side}-logo-img`);
            const abbrEl = document.getElementById(`matchday-${side}-logo-abbr`);
            if (!imgEl || !abbrEl) return;

            const wrapEl = imgEl.parentElement;
            const isClub = teamName === clubName;
            const logoSrc = isClub ? clubLogoSrc : teamLogos[teamName];
            if (wrapEl) {
                wrapEl.classList.toggle('club', isClub);
            }

            if (logoSrc) {
                imgEl.src = logoSrc;
                imgEl.classList.remove('hidden');
                abbrEl.classList.add('hidden');
            } else {
                abbrEl.textContent = getAbbreviation(teamName);
                abbrEl.classList.remove('hidden');
                imgEl.classList.add('hidden');
            }
        }

        function renderMatchday(match) {
            if (!match) return;

            const matchBadge = document.getElementById('match-badge');
            const isHomeMatch = match.homeTeam === clubName;
            if (matchBadge) {
                matchBadge.textContent = isHomeMatch ? 'Heimspiel' : 'Auswärtsspiel';
            }

            const homeNameEl = document.getElementById('matchday-home-name');
            const awayNameEl = document.getElementById('matchday-away-name');
            if (homeNameEl) homeNameEl.textContent = match.homeTeam;
            if (awayNameEl) awayNameEl.textContent = match.awayTeam;

            setTeamVisual('home', match.homeTeam);
            setTeamVisual('away', match.awayTeam);

            const dateEl = document.getElementById('matchday-date');
            const timeEl = document.getElementById('matchday-time');
            const locationEl = document.getElementById('matchday-location');
            if (dateEl) dateEl.textContent = formatMatchDateShort(match);
            if (timeEl) timeEl.textContent = match.time || '-';
            if (locationEl) locationEl.textContent = match.location || '-';
        }

        function getMatchDateTime(match) {
            const baseDate = getDateFromMatch(match);
            if (!baseDate || Number.isNaN(baseDate.getTime())) return null;

            const dateTime = new Date(baseDate);
            if (match.time) {
                const [hours, minutes] = match.time.split(':').map((v) => parseInt(v, 10));
                if (!Number.isNaN(hours) && !Number.isNaN(minutes)) {
                    dateTime.setHours(hours, minutes, 0, 0);
                }
            }
            return dateTime;
        }

        function hasMatchResult(match) {
            return Number.isFinite(match?.homeScore) && Number.isFinite(match?.awayScore);
        }

        function getNextMatch(list) {
            if (!Array.isArray(list) || list.length === 0) return null;

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const upcoming = list
                .map((match) => ({ match, dateTime: getMatchDateTime(match) }))
                .filter((entry) => (
                    entry.dateTime &&
                    !Number.isNaN(entry.dateTime.getTime()) &&
                    !hasMatchResult(entry.match)
                ))
                .sort((a, b) => a.dateTime - b.dateTime);

            const next = upcoming.find((entry) => entry.dateTime >= today);
            return (next || upcoming[0] || { match: list[0] }).match;
        }

        function getLastPlayedResult(list) {
            if (!Array.isArray(list) || list.length === 0) return null;

            const played = list
                .filter((match) => hasMatchResult(match))
                .map((match) => ({ match, dateTime: getMatchDateTime(match) }))
                .filter((entry) => entry.dateTime && !Number.isNaN(entry.dateTime.getTime()))
                .sort((a, b) => b.dateTime - a.dateTime);

            return played[0]?.match || null;
        }

        function renderNextMatch(match) {
            const emptyEl = document.getElementById('next-match-empty');
            const contentEl = document.getElementById('next-match-content');
            const metaEl = document.getElementById('next-match-meta');
            const dateEl = document.getElementById('next-match-date');
            const timeEl = document.getElementById('next-match-time');
            const opponentEl = document.getElementById('next-match-opponent');
            const locationEl = document.getElementById('next-match-location');

            if (!match) {
                if (emptyEl) emptyEl.classList.remove('hidden');
                if (contentEl) contentEl.classList.add('hidden');
                return;
            }

            if (emptyEl) emptyEl.classList.add('hidden');
            if (contentEl) contentEl.classList.remove('hidden');

            const isHomeMatch = match.homeTeam === clubName;
            const opponent = isHomeMatch ? match.awayTeam : match.homeTeam;

            if (metaEl) metaEl.textContent = isHomeMatch ? 'Heimspiel' : 'Auswärtsspiel';
            if (dateEl) dateEl.textContent = formatMatchDateShort(match);
            if (timeEl) timeEl.textContent = match.time || '-';
            if (opponentEl) opponentEl.textContent = opponent || clubName;
            if (locationEl) locationEl.textContent = `Ort: ${match.location || '-'}`;
        }

        function renderLastResult(result, matchList) {
            const resolvedResult = result || getLastPlayedResult(matchList);
            const titleEl = document.getElementById('last-result-title');
            const nextMatchPanelEl = document.getElementById('next-match-panel');
            const scoreRowEl = document.getElementById('last-result-score-row');
            const homeScoreEl = document.getElementById('last-result-home-score');
            const awayScoreEl = document.getElementById('last-result-away-score');
            const homeNameEl = document.getElementById('last-result-home-name');
            const awayNameEl = document.getElementById('last-result-away-name');
            const statusEl = document.getElementById('last-result-status');

            if (!resolvedResult) {
                if (titleEl) titleEl.textContent = 'Nächstes Spiel';
                if (nextMatchPanelEl) nextMatchPanelEl.classList.remove('hidden');
                if (scoreRowEl) scoreRowEl.classList.add('hidden');
                if (statusEl) statusEl.classList.add('hidden');
                renderNextMatch(getNextMatch(matchList));
                return;
            }

            if (titleEl) titleEl.textContent = 'Letztes Spiel';
            if (nextMatchPanelEl) nextMatchPanelEl.classList.add('hidden');
            if (scoreRowEl) scoreRowEl.classList.remove('hidden');
            if (statusEl) statusEl.classList.remove('hidden');

            if (homeScoreEl) homeScoreEl.textContent = String(resolvedResult.homeScore);
            if (awayScoreEl) awayScoreEl.textContent = String(resolvedResult.awayScore);
            if (homeNameEl) homeNameEl.textContent = resolvedResult.homeTeam;
            if (awayNameEl) awayNameEl.textContent = resolvedResult.awayTeam;
            if (statusEl) statusEl.textContent = resolvedResult.status || 'Endstand';
        }

        function buildMatchRow(match, index, totalVisible, officialUrl) {
            const homeIsClub = match.homeTeam === clubName;
            const awayIsClub = match.awayTeam === clubName;
            const borderClass = index === totalVisible - 1 ? '' : 'border-b border-gray-100';

            const homeClasses = homeIsClub ? 'text-bebbi-deep font-bold' : 'text-gray-700';
            const awayClasses = awayIsClub ? 'text-bebbi-deep font-bold' : 'text-gray-700';
            const dateLabel = formatMatchDateLabel(match);
            const location = match.location || '-';
            const time = match.time || '-';
            const resultDisplay = hasMatchResult(match)
                ? `${match.homeScore} : ${match.awayScore}`
                : '-';
            const resultClasses = hasMatchResult(match)
                ? 'font-semibold text-gray-700'
                : 'text-gray-400';

            return `
                <tr class="cursor-pointer hover:bg-bebbi-main/5 transition-colors ${borderClass}" tabindex="0" role="link" data-official-url="${officialUrl}" title="Offizielle Details auf FVNWS öffnen">
                    <td class="px-4 py-3 font-semibold text-gray-800">${dateLabel}</td>
                    <td class="px-4 py-3 text-gray-600">${time}</td>
                    <td class="px-4 py-3 text-right ${homeClasses}">${match.homeTeam}</td>
                    <td class="px-4 py-3 text-center ${resultClasses}">${resultDisplay}</td>
                    <td class="px-4 py-3 ${awayClasses}">${match.awayTeam}</td>
                    <td class="px-4 py-3 text-gray-500">${location}<span class="ml-2 text-[11px] font-bold uppercase tracking-[0.16em] text-bebbi-main">FVNWS</span></td>
                </tr>
            `;
        }

        function renderMatchList(list, bodyId, toggleId, labelId, isExpanded, officialUrl) {
            const matchListBody = document.getElementById(bodyId);
            const toggleButton = document.getElementById(toggleId);
            const toggleLabel = document.getElementById(labelId);
            if (!matchListBody || !toggleButton || !toggleLabel) return;

            const hasMoreThanInitial = list.length > initialVisibleMatches;
            const visibleMatches = hasMoreThanInitial && !isExpanded
                ? list.slice(0, initialVisibleMatches)
                : list;

            matchListBody.innerHTML = visibleMatches
                .map((match, index) => buildMatchRow(
                    match,
                    index,
                    visibleMatches.length,
                    match.officialUrl || officialUrl
                ))
                .join('');

            matchListBody.querySelectorAll('tr[data-official-url]').forEach((row) => {
                const openOfficial = () => {
                    const url = row.getAttribute('data-official-url');
                    if (!url) return;
                    window.open(url, '_blank', 'noopener,noreferrer');
                };

                row.addEventListener('click', openOfficial);
                row.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openOfficial();
                    }
                });
            });

            toggleButton.classList.toggle('hidden', !hasMoreThanInitial);
            toggleButton.classList.toggle('is-expanded', hasMoreThanInitial && isExpanded);
            toggleLabel.textContent = isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen';
        }

        const scheduleConfig = {
            ff17: {
                matches: matchesFF17,
                label: 'Meisterschaft Juniorinnen FF-17 2. Stärkeklasse / Frühjahrsrunde',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77789&v=480'
            },
            ff14: {
                matches: matchesFF14,
                label: 'Meisterschaft Juniorinnen FF-14 (9v9) / Frühjahrsrunde',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77790&v=480'
            },
            d9: {
                matches: matchesD9,
                label: 'Meisterschaft Junioren D-9 / Frühjahrsrunde',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?a=trr&lng=1&oid=8&t=77791&v=480'
            }
        };

        function renderMatchdayForTab(tab) {
            const config = scheduleConfig[tab] || scheduleConfig.ff17;
            const matchdayMatch = getNextMatch(config.matches) || config.matches[0];
            renderMatchday(matchdayMatch);
            renderLastResult(lastResult, config.matches);

            const competitionEl = document.getElementById('matchday-competition');
            if (competitionEl) {
                competitionEl.textContent = config.label;
            }
        }

        const matchListToggleFF17 = document.getElementById('match-list-toggle-ff17');
        if (matchListToggleFF17) {
            matchListToggleFF17.addEventListener('click', () => {
                isFF17Expanded = !isFF17Expanded;
                renderMatchList(matchesFF17, 'match-list-body-ff17', 'match-list-toggle-ff17',
                    'match-list-toggle-label-ff17', isFF17Expanded, scheduleConfig.ff17.officialUrl);
            });
        }

        const matchListToggleFF14 = document.getElementById('match-list-toggle-ff14');
        if (matchListToggleFF14) {
            matchListToggleFF14.addEventListener('click', () => {
                isFF14Expanded = !isFF14Expanded;
                renderMatchList(matchesFF14, 'match-list-body-ff14', 'match-list-toggle-ff14',
                    'match-list-toggle-label-ff14', isFF14Expanded, scheduleConfig.ff14.officialUrl);
            });
        }

        const matchListToggleD9 = document.getElementById('match-list-toggle-d9');
        if (matchListToggleD9) {
            matchListToggleD9.addEventListener('click', () => {
                isD9Expanded = !isD9Expanded;
                renderMatchList(matchesD9, 'match-list-body-d9', 'match-list-toggle-d9',
                    'match-list-toggle-label-d9', isD9Expanded, scheduleConfig.d9.officialUrl);
            });
        }

        function setActiveScheduleTab(tab) {
            const tabs = document.querySelectorAll('[data-schedule-tab]');
            const ff17Section = document.getElementById('schedule-ff17');
            const ff14Section = document.getElementById('schedule-ff14');
            const d9Section = document.getElementById('schedule-d9');

            if (ff17Section) ff17Section.classList.toggle('hidden', tab !== 'ff17');
            if (ff14Section) ff14Section.classList.toggle('hidden', tab !== 'ff14');
            if (d9Section) d9Section.classList.toggle('hidden', tab !== 'd9');

            tabs.forEach((button) => {
                const isActive = button.getAttribute('data-schedule-tab') === tab;
                button.classList.toggle('bg-bebbi-main', isActive);
                button.classList.toggle('text-white', isActive);
                button.classList.toggle('shadow-glow', isActive);
                button.classList.toggle('bg-white', !isActive);
                button.classList.toggle('text-bebbi-deep', !isActive);
                button.classList.toggle('border', !isActive);
                button.classList.toggle('border-gray-200', !isActive);
            });

            renderMatchdayForTab(tab);
        }

        document.querySelectorAll('[data-schedule-tab]').forEach((button) => {
            button.addEventListener('click', () => {
                const tab = button.getAttribute('data-schedule-tab');
                setActiveScheduleTab(tab);
            });
        });

        renderMatchdayForTab('ff17');
        renderMatchList(matchesFF17, 'match-list-body-ff17', 'match-list-toggle-ff17',
            'match-list-toggle-label-ff17', isFF17Expanded, scheduleConfig.ff17.officialUrl);
        renderMatchList(matchesFF14, 'match-list-body-ff14', 'match-list-toggle-ff14',
            'match-list-toggle-label-ff14', isFF14Expanded, scheduleConfig.ff14.officialUrl);
        renderMatchList(matchesD9, 'match-list-body-d9', 'match-list-toggle-d9',
            'match-list-toggle-label-d9', isD9Expanded, scheduleConfig.d9.officialUrl);
        setActiveScheduleTab('ff17');
        initContactForm();

        // --- ANIMATION LOGIC ---

        // 1. Intersection Observer for Scroll Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // Special Trigger for Matchcenter Badge
                    if (entry.target.id === 'matchcenter') {
                        const matchBadge = document.getElementById('match-badge');
                        if (matchBadge) {
                            matchBadge.classList.remove('opacity-0', 'translate-x-10');
                        }
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });
